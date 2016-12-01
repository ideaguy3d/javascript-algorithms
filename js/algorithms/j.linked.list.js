function jLinkedList () {
        let jNode = function(element){
            this.element = element;
            this.next = null;
        };

        let length = 0, head= null;

        //----- .append() implementation -----\\
        this.append = function(element){
            var node = new jNode(element), current;

            if (head === null) { // 1st node in list
                head = node;
            } else {
                current = head;

                // loop the list till we get to the last node.
                while(current.next) {
                    current = current.next;
                }

                // get the last item, and assign next to node to make the link.
                current.next = node;
            }

            length++; // update size of list 

        }; // END OF .append();

        //----- .insert() implementation -----\\
        this.insert = function(position, element){
            if (position > -1 && position <= length) {
                let node = new jNode(element), current = head, previous, index = 0;
                if (position === 0) { // then we are inserting into 1st position
                    node.next = current; 
                    head = node; 
                } else { // we are not inserting into 1st position
                    while (index++ < position) {
                        previous = current;
                        current = current.next; 
                    }
                    node.next = current; // make a link between the new item and the current item
                    previous.next = node; 
                }
                length++;
                return true; 
            } else { // the position was out of range
                return false; 
            }
        }; // END OF .insert(); 

        //----- .removeAt() implementation: -----\\ 
        this.removeAt = function(position) {
            // Check that the position is valid.  
            if (position > -1 && position < length) {
                let current = head, previous, index = 0; 
                if (position === 0) {
                    head = current.next;
                } else {
                    while (index++ < position) {
                        previous = current; 
                        current = current.next; 
                    }

                    // link previous.next with current.next removing the current element from memory
                    previous.next = current.next; 
                }
                length--;

                return current.element;  
            } else { // the position was not valid, so don't remove anything. 
                return null; 
            }

        }; // END OF .removeAt();

        this.remove = function(element){
            let index = this.indexOf(element);
            return this.removeAt(index);  
        };

        this.indexOf = function(element){
            let current = head, index = 0;
            while (current) {
                if (current.element === element) {
                    return index; 
                }
                index++
                current = current.next; 
            }
            return -1; 
        };

        this.isEmpty = function(){
            return length === 0; 
        };

        this.size = function(){
            return length; 
        };

        this.getHead = function () {
            return head; 
        }

        this.toString = function(){
            let current = head, llString = ''; 
            while (current) {
                llString += current.element + (current.next ? ', ' : 'null'); 
                current = current.next; 
            }
            return llString; 
        };

        this.print = function(){
            console.log(this.toString()); 
        };
    }

var list = new jLinkedList();
list.append(10);
list.append(15);
list.append(20);
list.print(); 
