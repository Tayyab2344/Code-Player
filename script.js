$(document).ready(function() {
  function updateOutput() {
      let htmlCode = $("#htmlCode").val();
      let cssCode = "<style>" + $("#cssCode").val() + "</style>";
      let jsCode = "<script>" + $("#jsCode").val() + "<\/script>";
      
      let combinedCode = htmlCode + cssCode + jsCode;
      
      $("#output").contents().find("html").html(combinedCode);
  }

  $("#runButton").on("click", updateOutput);
});