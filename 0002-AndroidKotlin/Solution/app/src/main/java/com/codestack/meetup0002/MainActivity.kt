package com.codestack.meetup0002

import android.graphics.Color
import android.os.Bundle
import android.view.Menu
import android.view.MenuItem
import androidx.appcompat.app.AppCompatActivity
import com.google.android.material.snackbar.Snackbar
import kotlinx.android.synthetic.main.activity_main.*
import kotlinx.android.synthetic.main.content_main.*
import kotlin.random.Random

class MainActivity : AppCompatActivity() {

    private var lastColor: String = "white"

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        setSupportActionBar(toolbar)

        textView.text = lastColor

        fab.setOnClickListener { view ->
            var tempColor = lastColor
            var newColorString = txtColorHex.text.toString()
            lastColor = newColorString

            try {
                container_main.setBackgroundColor(Color.parseColor(newColorString))
                textView.text = lastColor
                Snackbar.make(view, "Changing background to: $newColorString", Snackbar.LENGTH_LONG)
                    .setAction("Undo") {
                        lastColor = tempColor
                        container_main.setBackgroundColor(Color.parseColor(lastColor))
                        textView.text = lastColor
                    }
                    .show()

            } catch (_: IllegalArgumentException) {
                Snackbar.make(
                    view,
                    "\"$newColorString\" is not a recognized color. Please try again.",
                    Snackbar.LENGTH_SHORT
                )
                    .show()
            }
        }

        btnRandomColor.setOnClickListener {
            val randomColor = generateRandomHexColor()
            txtColorHex.setText(randomColor)
        }
    }

    override fun onCreateOptionsMenu(menu: Menu): Boolean {
        // Inflate the menu; this adds items to the action bar if it is present.
        menuInflater.inflate(R.menu.menu_main, menu)
        return true
    }

    override fun onOptionsItemSelected(item: MenuItem): Boolean {
        // Handle action bar item clicks here. The action bar will
        // automatically handle clicks on the Home/Up button, so long
        // as you specify a parent activity in AndroidManifest.xml.
        return when (item.itemId) {
            R.id.action_settings -> true
            else -> super.onOptionsItemSelected(item)
        }
    }

    private fun generateRandomHexColor(): String {
        val hexOptions = ('0'..'9').toMutableList()
        hexOptions.addAll(('a'..'f'))
        val random = Random
        val color = StringBuilder()
        for (i in 1..6) {
            color.append(hexOptions[random.nextInt(16)])
        }
        return "#$color"
    }
}
