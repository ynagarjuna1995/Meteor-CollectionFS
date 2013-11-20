FileObject.prototype.loadBlob = function(blob) {
  check(blob, Blob);
  var self = this;
  self.blob = blob;
  self.size = blob.size;
  self.type = blob.type;
};

FileObject.prototype.saveLocal = function(filename) {
  var self = this;
  
  if (typeof window === "undefined")
    throw new Error("window must be defined to use saveLocal");
  
  if (self.blob) {
    filename = filename || self.name;
    window.saveAs(self.blob, filename);
  }
};