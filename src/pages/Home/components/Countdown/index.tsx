import { useContext, useEffect } from 'react'
import { CountdownContainer, Separator } from './styles'
import { differenceInSeconds } from 'date-fns'
import { CyclesContext } from '../../../../contexts/CyclesContext'

export function Countdown() {
  const {
    activeCycle,
    activeCycleId,
    passedSecondsAmount,
    markCurrentCycleAsFinished,
    updateHowManySecondsHavePassed,
  } = useContext(CyclesContext)

  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0

  useEffect(() => {
    let interval: number

    if (activeCycle) {
      interval = setInterval(() => {
        const differenceInSecondsBetweenNowAndActiveCycleTotalSeconds =
          differenceInSeconds(new Date(), activeCycle.startDate)

        if (
          differenceInSecondsBetweenNowAndActiveCycleTotalSeconds >=
          totalSeconds
        ) {
          markCurrentCycleAsFinished()

          updateHowManySecondsHavePassed(totalSeconds)

          clearInterval(interval)
        } else {
          updateHowManySecondsHavePassed(
            differenceInSecondsBetweenNowAndActiveCycleTotalSeconds,
          )
        }
      }, 1000)
    }

    return () => {
      clearInterval(interval)
    }
  }, [
    activeCycle,
    totalSeconds,
    activeCycleId,
    markCurrentCycleAsFinished,
    updateHowManySecondsHavePassed,
  ])

  const currentSeconds = activeCycle ? totalSeconds - passedSecondsAmount : 0

  const minutesAmount = Math.floor(currentSeconds / 60)
  const secondsAmount = currentSeconds % 60

  const minutes = String(minutesAmount).padStart(2, '0')
  const seconds = String(secondsAmount).padStart(2, '0')

  useEffect(() => {
    if (activeCycle) {
      document.title = `${minutes}:${seconds}`
    } else {
      document.title = 'Timer pomodoro'
    }
  }, [minutes, seconds, activeCycle])

  return (
    <CountdownContainer>
      <span>{minutes[0]}</span>
      <span>{minutes[1]}</span>
      <Separator>:</Separator>
      <span>{seconds[0]}</span>
      <span>{seconds[1]}</span>
    </CountdownContainer>
  )
}