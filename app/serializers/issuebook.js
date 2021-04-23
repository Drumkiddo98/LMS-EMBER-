import DS from 'ember-data';
export default DS.RESTSerializer.extend({
    normalizeResponse(store, primaryModelClass, payload, id, requestType){
        arguments[2] = {
            "issuebooks":payload
        }
        return this._super(...arguments);
    },
    serializeIntoHash(data, type, record, options) {
        // add data.student.id = "";
        delete data.issuebook;
        Ember.assign(data, this.serialize(record, options));
    }

})
