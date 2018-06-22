'use babel';

/* @flow*/
import StatusBarTile from '../../lib/views/StatusBarTile';
import { asyncTest, state, failedTest } from '../common';

describe('StatusBar', () => {
  it('should not throw new constructor', () => {
    expect(() => new StatusBarTile({ state, onclick: () => {} })).not.toThrow();
  });

  it('should set counters to zero if no messages', () => {
    const view = new StatusBarTile({ state, onclick: () => {} });
    expect(view.element.className).toBe('status-bar-tester inline-block');
    expect(view.refs.failed.textContent).toBe('0');
    expect(view.refs.skipped.textContent).toBe('0');
    expect(view.refs.passed.textContent).toBe('0');
    expect(view.refs.beaker.className).not.toContain('tester-wait-beaker');
  });

  it('should update tiny if test running and counters if some message', asyncTest(async (done) => {
    let newState;
    const view = new StatusBarTile({ state, onclick: () => {} });
    expect(view.element.className).toBe('status-bar-tester inline-block');
    expect(view.refs.failed.textContent).toBe('0');
    expect(view.refs.skipped.textContent).toBe('0');
    expect(view.refs.passed.textContent).toBe('0');
    expect(view.refs.beaker.className).not.toContain('tester-wait-bottom-status');

    newState = Object.assign({}, state);
    newState.testRunning = true;
    await view.update(newState);
    expect(view.refs.failed.textContent).toBe('0');
    expect(view.refs.skipped.textContent).toBe('0');
    expect(view.refs.passed.textContent).toBe('0');
    expect(view.refs.beaker.className).toContain('tester-wait-bottom-status');

    newState = Object.assign({}, state);
    newState.testRunning = true;
    newState.messages = [failedTest];
    newState.rawMessages = [failedTest];
    await view.update(newState);
    expect(view.refs.failed.textContent).toBe('1');
    expect(view.refs.skipped.textContent).toBe('0');
    expect(view.refs.passed.textContent).toBe('0');
    expect(view.refs.beaker.className).toContain('tester-wait-bottom-status');

    newState = Object.assign({}, state);
    newState.testRunning = false;
    await view.update(newState);
    expect(view.refs.failed.textContent).toBe('0');
    expect(view.refs.skipped.textContent).toBe('0');
    expect(view.refs.passed.textContent).toBe('0');
    expect(view.refs.beaker.className).not.toContain('tester-wait-bottom-status');
    done();
  }));
});
