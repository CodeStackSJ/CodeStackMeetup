package com.codestack.meetup0002

import android.graphics.Color
import android.os.Bundle
import android.view.Menu
import android.view.MenuItem
import androidx.appcompat.app.AppCompatActivity
import com.google.android.material.snackbar.Snackbar
import kotlinx.android.synthetic.main.activity_main.*
import kotlinx.android.synthetic.main.content_main.*

class MainActivity : AppCompatActivity() {

    private var lastColor = "white"

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        setSupportActionBar(toolbar)

        fab.setOnClickListener { view ->
            var tempColor = lastColor
            var newColorString = txtColorHex.text.toString()
            lastColor = newColorString

            try {
                container_main.setBackgroundColor(Color.parseColor(newColorString))

                Snackbar.make(view, "Changing background to: $newColorString", Snackbar.LENGTH_LONG)
                    .setAction("Undo") {
                        lastColor = tempColor
                        container_main.setBackgroundColor(Color.parseColor(lastColor))
                    }
                    .show()

            } catch (exception: IllegalArgumentException) {
                Snackbar.make(view, "\"$newColorString\" is not a recognized color. Please try again.", Snackbar.LENGTH_SHORT)
                    .show()
            }
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
}
