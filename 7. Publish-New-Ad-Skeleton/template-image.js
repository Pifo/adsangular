<p>
  <label for="image">Image:</label>
  <input type="file" id="image"
         onchange="angular.element(this).scope().fileSelected(this)" />
  <div class="image-box">
      <p>Image Preview</p>
  </div>
</p>
