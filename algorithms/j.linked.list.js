/**
 * Created by Julius Alvarado on 11/30/2016.
 */
function jLinkedList() {
    var jNode = function (element) {
        this.element = element;
        this.next = null;
    };
    var length = 0, head = null;
    //----- .append() implementation -----\\
    this.append = function (element) {
        var node = new jNode(element), current;
        if (head === null) {
            head = node;
        }
        else {
            current = head;
            // loop the list till we get to the last node.
            while (current.next) {
                current = current.next;
            }
            // get the last item, and assign next to node to make the link.
            current.next = node;
        }
        length++; // update size of list
    }; // END OF .append();
    //----- .insert() implementation -----\\
    this.insert = function (position, element) {
        if (position > -1 && position <= length) {
            var node = new jNode(element), current = head, previous = void 0, index = 0;
            if (position === 0) {
                node.next = current;
                head = node;
            }
            else {
                while (index++ < position) {
                    previous = current;
                    current = current.next;
                }
                node.next = current; // make a link between the new item and the current item
                previous.next = node;
            }
            length++;
            return true;
        }
        else {
            return false;
        }
    }; // END OF .insert();
    //----- .removeAt() implementation: -----\\
    this.removeAt = function (position) {
        // Check that the position is valid.
        if (position > -1 && position < length) {
            var current = head, previous = void 0, index = 0;
            if (position === 0) {
                head = current.next;
            }
            else {
                while (index++ < position) {
                    previous = current;
                    current = current.next;
                }
                // link previous.next with current.next removing the current element from memory
                previous.next = current.next;
            }
            length--;
            return current.element;
        }
        else {
            return null;
        }
    }; // END OF .removeAt();
    this.remove = function (element) {
        var index = this.indexOf(element);
        return this.removeAt(index);
    };
    this.indexOf = function (element) {
        var current = head, index = 0;
        while (current) {
            if (current.element === element) {
                return index;
            }
            index++;
            current = current.next;
        }
        return -1;
    };
    this.isEmpty = function () {
        return length === 0;
    };
    this.size = function () {
        return length;
    };
    this.getHead = function () {
        return head;
    };
    this.toString = function () {
        var current = head, llString = '';
        while (current) {
            llString += current.element + (current.next ? ', ' : ', null');
            current = current.next;
        }
        return llString;
    };
    this.print = function () {
        console.log(this.toString());
    };
}
// now I'll use the jLinkedList class.
var jlist = new jLinkedList();
jlist.append(10);
jlist.append(15);
jlist.append(20);
jlist.print();
document.getElementById("linked-list1").innerHTML = jlist.toString();
//\\ 
//# sourceMappingURL=j.linked.list.js.map