// Modified from Sam Hocevar's cloud-to-butt extension, which is licensed WTF
// https://github.com/panicsteve/cloud-to-butt/blob/master/LICENSE.txt

(function(){
  function walk(node) {
      // This function taken from stack overflow: http://is.gd/mwZp7E
      var child, next;
  
      switch (node.nodeType) {
        case 1:  // Element
        case 9:  // Document
        case 11: // Document fragment
          child = node.firstChild;
          while (child) {
            next = child.nextSibling;
            walk(child);
            child = next;
          }
          break;
        case 3: // Text node
          handleText(node);
          break;
      }
    }

    function handleText(textNode)  {
      var v = textNode.nodeValue;
  
      v = v.replace(/\bUtilize(s?)\b/g, "Use\1");
      v = v.replace(/\butilize(s?)\b/g, "use\1");
      v = v.replace(/\butilization\b/g, "use");
      v = v.replace(/\bUtilization\b/g, "Use");
      v = v.replace(/\bunderutilization\b/g, "underuse");
      v = v.replace(/\bunderutilized\b/g, "underused");
      v = v.replace(/\bUnderutilization\b/g, "Underuse");
      v = v.replace(/\bUnderutilized\b/g, "Underused");
      v = v.replace(/\butilizing\b/g, "using");
      v = v.replace(/\bUtilizing\b/g, "Using");

      textNode.nodeValue = v;
    }

    // Run ASAP
    walk(document.body)
})();
