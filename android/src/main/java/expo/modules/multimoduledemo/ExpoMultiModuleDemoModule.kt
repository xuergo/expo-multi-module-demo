package expo.modules.multimoduledemo

import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition

class ExpoMultiModuleDemoModule : Module() {
  override fun definition() = ModuleDefinition {
    Name("ExpoMultiModuleDemo")

    View(ExpoMultiModuleDemoView::class) {
      Prop("name") { view: ExpoMultiModuleDemoView, prop: Any ->
        view.setChartData();
      }
    }
  }
}
