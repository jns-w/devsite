import * as THREE from 'three'

export function getDataTexture(size: number) {
    let number = size * size

    const data = new Float32Array(number * 4) // 4 values per point (rgba)

    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {

            const index = (i * size + j) * 4

            // generate points on a sphere
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos(2 * Math.random() - 1); // more uniform than Math.random() * Math.PI
            const x = Math.sin(phi) * Math.cos(theta);
            const y = Math.sin(phi) * Math.sin(theta);
            const z = Math.cos(phi);

            data[index] = (i / size - 0.5) * 7;
            data[index + 1] = (j / size - 0.5) * 7;
            data[index + 2] = 0;
            data[index + 3] = 0;
        }
    }

    const dataTexture = new THREE.DataTexture(
        data,
        size,
        size,
        THREE.RGBAFormat, // this is for using Float32Array instead of Uint8Array
        THREE.FloatType // this is for using Float32Array instead of Uint8Array
    );
    dataTexture.needsUpdate = true;
    return dataTexture;
}

export function getStartingTexture(pointsCount: number) {
    let number = pointsCount * pointsCount
    const data = new Float32Array(number * 4) // 4 values per point (rgba)

    for (let i = 0; i < pointsCount; i++) {
        for (let j = 0; j < pointsCount; j++) {
            const index = (i * pointsCount + j) * 4
            data[index] = 5
            data[index + 1] = Math.random() * 5 - 2.5
            data[index + 2] = 0
            data[index + 3] = 0
        }
    }

    const dataTexture = new THREE.DataTexture(
        data,
        pointsCount,
        pointsCount,
        THREE.RGBAFormat, // this is for using Float32Array instead of Uint8Array
        THREE.FloatType // this is for using Float32Array instead of Uint8Array
    );
    dataTexture.needsUpdate = true;
    return dataTexture;
}

export function getSphereTexture(pointsCount: number, radius: number, offsetX: number) {
    let number = pointsCount * pointsCount

    const data = new Float32Array(number * 4) // 4 values per point (rgba)

    for (let i = 0; i < pointsCount; i++) {
        for (let j = 0; j < pointsCount; j++) {

            const index = (i * pointsCount + j) * 4

            // generate points on a sphere
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos(Math.random() - 1); // more uniform than Math.random() * Math.PI
            const x = Math.sin(phi) * Math.cos(theta) * radius + offsetX;
            const y = Math.sin(phi) * Math.sin(theta) * radius;
            const z = Math.cos(phi);

            data[index] = x;
            data[index + 1] = y;
            data[index + 2] = z;
            data[index + 3] = 0;
        }
    }

    const dataTexture = new THREE.DataTexture(
        data,
        pointsCount,
        pointsCount,
        THREE.RGBAFormat, // this is for using Float32Array instead of Uint8Array
        THREE.FloatType // this is for using Float32Array instead of Uint8Array
    );
    dataTexture.needsUpdate = true;
    return dataTexture;

}

export function getVelocityTexture(size: number) {
    let number = size * size

    const data = new Float32Array(number * 4) // 4 values per point (rgba)

    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            const index = (i * size + j) * 4

            data[index] = 0;
            data[index + 1] = 0;
            data[index + 2] = 0;
            data[index + 3] = 0;
        }
    }

    const dataTexture = new THREE.DataTexture(
        data,
        size,
        size,
        THREE.RGBAFormat, // this is for using Float32Array instead of Uint8Array
        THREE.FloatType // this is for using Float32Array instead of Uint8Array
    );
    dataTexture.needsUpdate = true;
    return dataTexture;

}