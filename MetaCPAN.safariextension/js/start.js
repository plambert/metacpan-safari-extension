// javascript injected at page start

var loc=window.location + "";
if (! loc.match(/^https?:\/\/(rt)\.cpan\.org/) {
  var newloc=loc.replace(/^(https?:\/\/[a-z0-9\-\.]*)\.cpan\.org/, '$1.mcpan.org');
  if (loc != newloc) {
    // alert(JSON.stringify({"loc":loc,"new":newloc}));
    window.location=newloc;
  }
}

