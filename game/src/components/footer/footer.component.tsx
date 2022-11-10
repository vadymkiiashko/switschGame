
import { bindActionCreators } from '@reduxjs/toolkit'
import { connect } from 'react-redux'
import { useAppSelector, useAppDispatch } from '../../app/hooks'
import {  GameState, startGame  } from '../../fetures/game/gameSlice'
import '../../styles/components/footer/footer.styles.scss'

interface IStateProps {
  clicks: number
  isActive: boolean
}
interface IDispatchProps {
  startGame: () => void
}
interface IOwnProps {}

type Props = IStateProps & IDispatchProps & IOwnProps

const RawFooter: React.FC<Props> = ({clicks, isActive, startGame}) => {
    return (
        <div className='footer'>
            { isActive
                ? `${clicks} BUTTONS PRESSED`
                : <button className="start-btn" onClick={() => startGame()}>NEW GAME</button>
            }
        </div>
    )
}

export const Footer = connect(
  (state: GameState) => ({
    clicks: state.clicks,
    isActive: state.isActive
  }),
  (dispatch) => bindActionCreators({ startGame }, dispatch)
)(RawFooter)