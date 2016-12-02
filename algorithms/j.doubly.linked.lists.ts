/**
 * Created by Julius Alvarado on 12/1/2016.
 */

function jDoublyLinkedList() {
    let jNode = function (element) {
        this.element = element;
        this.next = null;
        this.prev = null;
    };

    let tail = null, head = null, length = 0;

    this.append = function (element) {
        let jnode = new jNode(element), head;

        if (head === null) {
            //this is the 1st element of the list
            head = jnode;
            tail = jnode;
        } else {
            // attahcing the tail jnode
            tail.next = jnode;
            jnode.prev = tail;
            tail = jnode;
        }

        length++; // updating list size
    };

    this.insert = function (position, element) {

        if (position >= 0 && position <= length) {

            // we have to have a current var to know which node to
            // operate against / relative to for insertion.
            let jnode = new jNode(element), current = head,
                previous, index = 0;

            if (position === 0) { // 1st position
                if (!head) { // { 1 }, there is not a head, head is null.
                    head = jnode;
                    tail = jnode;
                } else { // there is already an element at the head.
                    jnode.next = current;
                    current.prev = jnode; // { 2 } because jnode is being inserted at the 0 index.
                    head = jnode;
                }
            } else if (position === length) { // last position
                // current is now in the last position
                current = tail; // { 3 }
                current.next = jnode;
                jnode.prev = current;
                tail = jnode;
            } else { // we are inserting somewhere in the middle.
                while (index++ < position) { // { 4 }
                    previous = current;
                    current = current.next;
                }
                jnode.next =  current; // { 5 }
                previous.next = jnode;
                current.prev = jnode;
                jnode.next = current;
            }
            length++; // update size.
            return true;

        } else { // position out of bounds
            return false;
        }

    }; // ^_^ END OF .insert() ^_^ \\

    this.removeAt = function(position){
        if(position > -1 && position <= length) {
            let current = head, previous, index = 0;
            if (position === 0) { // first position
                head = current.next;
                // update the tail if there is only 1 item
                if(length === 1) tail = null; // { 2 }
                else head.prev = null; // { 3 }, we can also use "current.next.prev"
            } else if (position === length-1) { // last position
                current = tail; // { 4 }
                tail = current.prev;
                tail.next = null;
            } else { // remove somewhere in the middle.
                while (index++ < position) { // { 5 }
                    previous = current;
                    current = current.next;
                }
                // link previous' and currents' .next
                previous.next = current.next; // { 6 } ??
                current.next.prev = previous;
            }
            length--;
            return current.element;
        } else {
            return null;
        }

    }; // ^_^ END OF .removeAt() ^_^ \\

} // ^_^ END OF jDoublyLinkedList class ^_^ \\

// use my doubly linked list now.
var dllist = new jDoublyLinkedList();
dllist.append(15);

//\\