import * as React from 'react';

import { ExpoMultiModuleDemoViewProps } from './ExpoMultiModuleDemo.types';

export default function ExpoMultiModuleDemoView(props: ExpoMultiModuleDemoViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
