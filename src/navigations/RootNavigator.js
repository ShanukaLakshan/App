import * as React from 'react';
import {StackActions, CommonActions} from '@react-navigation/native';

export const navigationRef = React.createRef();

export function navigate(name, params) {
  navigationRef.current?.navigate(name, params);
}

export function push(...args) {
  navigationRef.current?.dispatch(StackActions.push(...args));
}

export function reset(index, routes) {
  navigationRef.current?.dispatch(CommonActions.reset(index, routes));
}

export function replace(name, params) {
  navigationRef.current &&
    navigationRef.current.dispatch(StackActions.replace(name, params));
}
