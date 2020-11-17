let dbPromise = idb.open("football", 1, function (upgradeDB) {
    if (!upgradeDB.objectStoreNames.contains('teamFavorite')) {
        let teamStore = upgradeDB.createObjectStore('teamFavorite', {
            keyPath: 'id',
            autoIncrement: false
        })
        teamStore.createIndex('id', 'id', {
            unique: true
        })
    }
})
// READ data
function getAllTeamFav() {
    return dbPromise.then(async db => {
        let tx = await db.transaction('teamFavorite', 'readonly')
        let store = await tx.objectStore('teamFavorite')
        return await store.getAll()
    })
}
// ADD data
function addTeamFav(data) {
    dbPromise.then(db => {
        let tx = db.transaction('teamFavorite', 'readwrite')
        tx.objectStore('teamFavorite').add(data)
        return tx.complete
    })
}
// CHECK DATA exist
function isFav(id) {
    return dbPromise.then(async db => {
        let tx = await db.transaction('teamFavorite', 'readonly')
        let data = await tx.objectStore('teamFavorite').get(id)
        return data == undefined ? false : true
    })

}
// DELETE data
function deleteTeamFav(id) {
    dbPromise.then(db => {
        let tx = db.transaction('teamFavorite','readwrite')
        tx.objectStore('teamFavorite').delete(id)
        return tx.complete
    })
}