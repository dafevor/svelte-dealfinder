/**
 * Service request of Lat-Long points contained in the area described by the radius
 * @param {object} yourPosition Lat-Long point of your position.
 * @param {number} radius Area radius from your position.
 * @return {Array<object>} Array of Lat-long points around you.
 */

export const fetchPoints = (yourPosition, radius) => {
    const pointsPromise = new Promise((resolve, reject) => {
        console.log(`searching a ${radius}km to Lat: ${yourPosition.lat} and Lng: ${yourPosition.lng}`)
        setTimeout(() => {
          resolve([
              { lat: 4.660197, lng: 285.880623, label: 'Pet Shop' },
              { lat: 4.658651, lng: 285.882499, label: 'Shoes Store' },
              { lat: 4.661429, lng: 285.883274, label: 'Clothes Store' },
              { lat: 4.658288, lng: 285.880743, label: 'Drug Store' },
              { lat: 4.652621, lng: 285.874777, label: 'Library' }
          ]);
        }, 500);
    }); 

    return pointsPromise
}
