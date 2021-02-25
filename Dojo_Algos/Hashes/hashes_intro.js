function HashMap(capacity) {
    this.capacity = capacity;
    this.table = [];
}

String.prototype.hashCode = function() {
    var hash = 0;
    if (this.length == 0) return hash;
    for (var i = 0; i < this.length; i++) {
        char = this.charCodeAt(i);
        hash = ((hash<<5)-hash)+char;
        hash &= hash;
    }
    return hash;
}

function mod(input, div) {
    return (input % div + div) % div;
}

var myHashCode = myString.hashCode()

var myIdx = mod(myHashCode, arrSize);

var myString = "Bill";
