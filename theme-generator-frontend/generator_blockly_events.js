
function onWorkspaceChange(event) {
  var code = Blockly.PHP.workspaceToCode(workspace);
  document.getElementById("codearea").value = code;
}

