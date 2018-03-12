import Raven from 'raven-js';

Raven.config('https://229f9b3a767047bfbf64485673f58723@sentry.io/105956').install();

const logErrorToRaven = (error, action, getState) => Raven.captureException(error, {
    extra: {
        action,
        state: getState()
    }
});

const crashReporter = store => next => action => {
    try {
        return next(action);
    } catch (error) {
        logErrorToRaven(error, action, store.getState);
        throw error;
    }
};

export default crashReporter;
