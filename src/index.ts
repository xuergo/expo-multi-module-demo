import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to ExpoMultiModuleDemo.web.ts
// and on native platforms to ExpoMultiModuleDemo.ts
import ExpoMultiModuleDemoModule from './ExpoMultiModuleDemoModule';
import ExpoMultiModuleDemoView from './ExpoMultiModuleDemoView';
import { ChangeEventPayload, ExpoMultiModuleDemoViewProps } from './ExpoMultiModuleDemo.types';

// Get the native constant value.
export const PI = ExpoMultiModuleDemoModule.PI;

export function hello(): string {
  return ExpoMultiModuleDemoModule.hello();
}

export async function setValueAsync(value: string) {
  return await ExpoMultiModuleDemoModule.setValueAsync(value);
}

const emitter = new EventEmitter(ExpoMultiModuleDemoModule ?? NativeModulesProxy.ExpoMultiModuleDemo);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { ExpoMultiModuleDemoView, ExpoMultiModuleDemoViewProps, ChangeEventPayload };
