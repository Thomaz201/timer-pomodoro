import { Cycle } from './reducer'

export enum ActionTypes {
  ADD_NEW_CYCLE = 'ADD_NEW_CYCLE',
  INTERRUPT_CURRENT_CYCLE = 'INTERRUPT_CURRENT_CYCLE',
  MARK_CURRENT_CYCLE_AS_FINISHED = 'MARK_CURRENT_CYCLE_AS_FINISHED',
}

interface AddNewCycleActionProps {
  type: ActionTypes.ADD_NEW_CYCLE
  payload: { newCycle: Cycle }
}

interface InterruptCurrentCycleActionProps {
  type: ActionTypes.INTERRUPT_CURRENT_CYCLE
}

interface MarkCurrentCycleAsFinishedProps {
  type: ActionTypes.MARK_CURRENT_CYCLE_AS_FINISHED
}

export type ActionsTypes =
  | AddNewCycleActionProps
  | InterruptCurrentCycleActionProps
  | MarkCurrentCycleAsFinishedProps

export function addNewCycleAction(newCycle: Cycle): AddNewCycleActionProps {
  return {
    type: ActionTypes.ADD_NEW_CYCLE,
    payload: {
      newCycle,
    },
  }
}

export function interruptCurrentCycleAction(): InterruptCurrentCycleActionProps {
  return {
    type: ActionTypes.INTERRUPT_CURRENT_CYCLE,
  }
}

export function markCurrentCycleAsFinishedAction(): MarkCurrentCycleAsFinishedProps {
  return {
    type: ActionTypes.MARK_CURRENT_CYCLE_AS_FINISHED,
  }
}
