# Linked List Project

## Made for the Odin Project

### by Bradley Reynolds

### Class LinkedList: Methods

append(`value`) - This method will add the specified `value` to the end of the linked list.

prepend(`value`) - This method will add the specified `value` to the front of the linked list, and also make it the `fhead`, or first value in the linked list.

size() - This method will return the size of linked list, similar to array.length.

head() - This method will return the current head of the linked list.

tail() - This method will return the last node in the linked list.

at(`index`) - This method will return the node in the linked list at the specified `index`.

pop() - This method will remove the last node in the linked list.

contains(`value`) - This method will return true/false based on whether or not there is a node with the specified `value`.

find(`value`) - This method will return the index of the node that has the specified `value`, if `value` is not in the linked list, then the method will return null.

toString() - This method will return a string in form '[value1] -> [value2] -> [value3] -> null' based on the order of the linked list.

insertAt(`value`, `index`) - This method will insert a node with the specified `value` at the specified `index`. The node currently occupying that `index` will be assinged as the `.next` value of inserted node. If the `index` is greater than or equal to the `size()` method's return value, then the `append(value)` method is ran instead.

removeAt(`index`) - This method removes the node at the given `index` by assinging the previous node's `.next` value to point towards the node that comes right after the node being removed.
