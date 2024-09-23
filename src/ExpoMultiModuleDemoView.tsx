import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { ExpoMultiModuleDemoViewProps } from './ExpoMultiModuleDemo.types';

const NativeView: React.ComponentType<ExpoMultiModuleDemoViewProps> =
  requireNativeViewManager('ExpoMultiModuleDemo');

export default function ExpoMultiModuleDemoView(props: ExpoMultiModuleDemoViewProps) {
  return <NativeView {...props} />;
}
