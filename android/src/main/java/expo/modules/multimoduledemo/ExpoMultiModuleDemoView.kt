package expo.modules.multimoduledemo

import android.content.Context
import android.graphics.Color
import androidx.annotation.ColorInt
import com.github.mikephil.charting.charts.PieChart
import com.github.mikephil.charting.data.PieData
import com.github.mikephil.charting.data.PieDataSet
import com.github.mikephil.charting.data.PieEntry
import expo.modules.kotlin.AppContext
import expo.modules.kotlin.records.Field
import expo.modules.kotlin.records.Record
import expo.modules.kotlin.views.ExpoView
import androidx.compose.material3.Text
import android.util.Log
import androidx.compose.ui.platform.ComposeView
import android.widget.LinearLayout
import android.view.ViewGroup.LayoutParams
import androidx.compose.runtime.Composable
import android.widget.TextView




class Series : Record {
  @Field
  val color: String = "#ff0000"

  @Field
  val percentage: Float = 0.0f
}

class ExpoMultiModuleDemoView(context: Context, appContext: AppContext) : ExpoView(context, appContext) {


    fun setChartData(data: ArrayList<Series>) {
        val textView = TextView(context).apply {
            text = "Hello World"
            setTextColor(Color.RED)
        }
        addView(textView)
    }
}
