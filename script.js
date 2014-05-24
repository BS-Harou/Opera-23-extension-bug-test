// on document_end:

var iframe = document.createElement('iframe');
iframe.style.cssText = 'position: fixed; top: 10px; left: 10px;';
document.body.appendChild(iframe);

// injected css should rewrite red to green
iframe.contentDocument.write('<div id="extension-bug-test-01" style="background: red; height: 100%;">   This should be green!   </div>');
