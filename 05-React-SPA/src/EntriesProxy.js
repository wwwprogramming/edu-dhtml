import moment from 'moment';
import lodash from 'lodash';

class _EntriesProxy {
	constructor() {
		console.log("CREATING ENTRIES PROXY");
		this.entries = [
			{id:1, title:"title-1",description:"desc-1", start:moment("2016-06-13T12:00:00"),end:moment("2016-06-13T14:00:00")},
			{id:2, title:"title-2",description:"desc-2", start:moment("2016-06-14T13:00:00"),end:moment("2016-06-14T13:30:00")},
			{id:3, title:"title-3",description:"desc-3", start:moment(),end:moment()},
			{id:4, title:"title-4",description:"desc-4", start:moment(),end:moment()}
		];
	}
	getEntry(id) {
		return _.find(this.entries, function(o) { return parseInt(o.id) === parseInt(id); });
	}
	getEntries() {
		return this.entries;
	}
	addEntry(data) {
		var id = this.entries.length  +1 ;
		
		this.entries.push({
			id: id, 
			title: data.title, 
			start: moment(data.start, "DD.MM.YYYY HH:mm"), 
			end: moment(data.end,"DD.MM.YYYY HH:mm"), 
			description:data.description
		});
		return id;
	}
	setEntry(data) {
		var index = _.findIndex(this.entries, function(o) { return parseInt(o.id) === parseInt(data.id); });
		this.entries[index] = {
			id: data.id, 
			title: data.title, 
			start: moment(data.start, "DD.MM.YYYY HH:mm"), 
			end: moment(data.end,"DD.MM.YYYY HH:mm"), 
			description:data.description
		};
	}
	removeEntry(id) {
		
		var entry = _.remove(this.entries, function(row) {
            return parseInt(row.id) === parseInt(id);
		});
		return entry;
	}


}
var EntriesProxy = new _EntriesProxy();
export default EntriesProxy;