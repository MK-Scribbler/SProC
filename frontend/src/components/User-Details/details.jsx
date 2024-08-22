import React, { useEffect } from 'react';
import './details.css';
import $ from 'jquery';
import 'jquery-easing'; // Import jQuery easing if needed

const MultiStepForm = () => {
  useEffect(() => {
    var current_fs, next_fs, previous_fs; // fieldsets
    var left, opacity, scale; // fieldset properties which we will animate
    var animating; // flag to prevent quick multi-click glitches

    $(".next").click(function () {
      if (animating) return false;
      animating = true;

      current_fs = $(this).parent();
      next_fs = $(this).parent().next();

      // Activate next step on progressbar using the index of next_fs
      $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");

      // Show the next fieldset
      next_fs.show();
      // Hide the current fieldset with style
      current_fs.animate({ opacity: 0 }, {
        step: function (now, mx) {
          // As the opacity of current_fs reduces to 0 - stored in "now"
          // 1. Scale current_fs down to 80%
          scale = 1 - (1 - now) * 0.2;
          // 2. Bring next_fs from the right (50%)
          left = (now * 50) + "%";
          // 3. Increase opacity of next_fs to 1 as it moves in
          opacity = 1 - now;
          current_fs.css({
            'transform': 'scale(' + scale + ')',
            'position': 'absolute'
          });
          next_fs.css({ 'left': left, 'opacity': opacity });
        },
        duration: 800,
        complete: function () {
          current_fs.hide();
          animating = false;
        },
        // This comes from the custom easing plugin
        easing: 'easeInOutBack'
      });
    });

    $(".previous").click(function () {
      if (animating) return false;
      animating = true;

      current_fs = $(this).parent();
      previous_fs = $(this).parent().prev();

      // De-activate current step on progressbar
      $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");

      // Show the previous fieldset
      previous_fs.show();
      // Hide the current fieldset with style
      current_fs.animate({ opacity: 0 }, {
        step: function (now, mx) {
          // As the opacity of current_fs reduces to 0 - stored in "now"
          // 1. Scale previous_fs from 80% to 100%
          scale = 0.8 + (1 - now) * 0.2;
          // 2. Take current_fs to the right(50%) - from 0%
          left = ((1 - now) * 50) + "%";
          // 3. Increase opacity of previous_fs to 1 as it moves in
          opacity = 1 - now;
          current_fs.css({ 'left': left });
          previous_fs.css({ 'transform': 'scale(' + scale + ')', 'opacity': opacity });
        },
        duration: 800,
        complete: function () {
          current_fs.hide();
          animating = false;
        },
        // This comes from the custom easing plugin
        easing: 'easeInOutBack'
      });
    });
  }, []);

  return (
    <div>
      {/* Multistep Form */}
      <form id="msform">
        {/* Progressbar */}
        <ul id="progressbar">
          <li className="active">Steps 1</li>
          <li>Step 2</li>
          <li>Step 3</li>
        </ul>

        {/* Fieldsets */}
        <fieldset>
          <h2 className="fs-title">Step 1</h2>
          <h3 className="fs-subtitle">This is step 1</h3>
          <input type="text" name="name" placeholder="Name" />
          <input type="text" name="email" placeholder="Email" />
          <button type="button" className="next action-button">Next</button>
        </fieldset>

        <fieldset>
          <h2 className="fs-title">Step 2</h2>
          <h3 className="fs-subtitle">This is step 2</h3>
          <input type="text" name="phone" placeholder="Phone" />
          <input type="text" name="address" placeholder="Address" />
          <button type="button" className="previous action-button">Previous</button>
          <button type="button" className="next action-button">Next</button>
        </fieldset>

        <fieldset>
          <h2 className="fs-title">Step 3</h2>
          <h3 className="fs-subtitle">This is step 3</h3>
          <textarea name="message" placeholder="Message"></textarea>
          <button type="button" className="previous action-button">Previous</button>
          <button type="submit" className="submit action-button">Submit</button>
        </fieldset>
      </form>
    </div>
  );
};

export default MultiStepForm;
