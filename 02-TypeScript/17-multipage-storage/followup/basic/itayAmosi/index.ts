const _items = getItemsFromStorage();
// items = _items;

if (_items) {
    items.push(..._items);
}

renderItems(items, "itemsRoot");
handleSaveItems()