function calculateSSD(data, centroids, assignments) {
    let ssd = 0;
    for (let i = 0; i < data.length; i++) {
      const centroid = centroids[assignments[i]];
      const distance = calculateDistance(data[i], centroid);
      ssd += distance ** 2;
    }
    return ssd;
  }
function calculateDistance(point1, point2) {
    let sumSquaredDistances = 0;
    for (let d = 0; d < point1.length; d++) {
    const distance = point1[d] - point2[d];
    sumSquaredDistances += distance * distance;
    }
    return Math.sqrt(sumSquaredDistances);
}
function runKMeans(data, k) {
    const numDimensions = data[0].length;
    const numDataPoints = data.length;

    let centroids = data.slice(0, k).map((point) => point.slice());

    const iterations = 10; 

    for (let i = 0; i < iterations; i++) {
        const assignments = new Array(numDataPoints).fill(0);
        for (let j = 0; j < numDataPoints; j++) {
        let minDistance = Infinity;
        let closestCentroidIndex = 0;

        for (let k = 0; k < centroids.length; k++) {
            const distance = calculateDistance(data[j], centroids[k]);

            if (distance < minDistance) {
            minDistance = distance;
            closestCentroidIndex = k;
            }
        }

        assignments[j] = closestCentroidIndex;
        }
        const newCentroids = new Array(centroids.length).fill(0).map(() => new Array(numDimensions).fill(0));
        const counts = new Array(centroids.length).fill(0);

        for (let j = 0; j < numDataPoints; j++) {
        const centroidIndex = assignments[j];
        counts[centroidIndex]++;

        for (let d = 0; d < numDimensions; d++) {
            newCentroids[centroidIndex][d] += data[j][d];
        }
        }

        for (let k = 0; k < centroids.length; k++) {
        for (let d = 0; d < numDimensions; d++) {
            newCentroids[k][d] /= counts[k] !== 0 ? counts[k] : 1;
        }
        }

        centroids = newCentroids;
    }

    const assignments = new Array(numDataPoints).fill(0);
    for (let j = 0; j < numDataPoints; j++) {
        let minDistance = Infinity;
        let closestCentroidIndex = 0;

        for (let k = 0; k < centroids.length; k++) {
        const distance = calculateDistance(data[j], centroids[k]);

        if (distance < minDistance) {
            minDistance = distance;
            closestCentroidIndex = k;
        }
        }

        assignments[j] = closestCentroidIndex;
    }

    const ssd = calculateSSD(data, centroids, assignments);

    return { centroids, ssd };
}
function findOptimalK(data, maxK) {
    const ssdValues = [];

    for (let k = 1; k <= maxK; k++) {
        const { centroids,ssd } = runKMeans(data, k);
        console.log(centroids);
        ssdValues.push(ssd);
    }
    let optimalK = 1;
    let maxVarianceExplained = 0;
    for (let i = 1; i < ssdValues.length - 1; i++) {
        const varianceExplained = ssdValues[i - 1] - ssdValues[i];
        if (varianceExplained > maxVarianceExplained) {
        maxVarianceExplained = varianceExplained;
        optimalK = i + 1;
        }
    }

    return optimalK;
}
export {findOptimalK};