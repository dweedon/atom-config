'use babel';

/* @flow*/

import { Observable } from 'rxjs';
import { SET_CURRENT_MESSAGE, errorAction } from '../actions';
import type { Message, TesterAction } from '../../types';

export default function setCurrentMessage(action$: Observable<TesterAction>): Observable<TesterAction> {
  return action$.ofType(SET_CURRENT_MESSAGE)
    .filter((action: TesterAction) => action.payload && action.payload.currentMessage && action.payload.currentMessage.filePath)
    .map(action => action.payload.currentMessage)
    .switchMap((message: Message) =>
      Observable.fromPromise(atom.workspace.open(message.filePath, { initialLine: message.lineNumber }))
        .switchMap(() => Observable.empty()))
    .catch(err => Observable.of(errorAction(err)));
}
