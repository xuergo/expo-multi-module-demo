package expo.modules.multimoduledemo

import android.content.Context
import android.graphics.Color
import expo.modules.kotlin.AppContext
import expo.modules.kotlin.views.ExpoView
import android.util.Log
import android.widget.TextView
import com.example.mylibrary.TestFile


class ExpoMultiModuleDemoView(context: Context, appContext: AppContext) : ExpoView(context, appContext) {


    fun setChartData() {
        val textView = TextView(context).apply {
            text = TestFile()
            setTextColor(Color.BLACK)
        }
        addView(textView)
    }
}
