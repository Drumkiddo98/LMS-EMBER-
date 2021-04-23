import DS from 'ember-data';
export default DS.RESTSerializer.extend({
    normalizeResponse(store, primaryModelClass, payload, id, requestType){
        arguments[2] = {
            "students":payload
        }
        return this._super(...arguments);
    },
    serializeIntoHash(data, type, record, options) {
        // add data.student.id = "";
        delete data.student;
        Ember.assign(data, this.serialize(record, options));
    }

})
