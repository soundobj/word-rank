/**
 * extension to the Map object, when you want to build a map whose values are a dynamic array
 * and you want to easily push values to keys.
 * @param key the immutable map key
 * @param value the value to instantiate the key with ( within an array ) or push to the
 * existing key array
 */
Map.prototype.createOrUpdate = function (key,value) {
    if(!this.has(key)) {
        this.set(key,[value]);
    } else {
        let current = this.get(key);
        current.push(value);
        this.set(key,current);
    }
}

Map.prototype.toString = function() {
    let template = "";
    for(let key of this.keys()){
        template += `${key} {\n`;
        template += `  ${this.get(key).toString()}\n`;
        template += '}\n';
    }
    return template;
}