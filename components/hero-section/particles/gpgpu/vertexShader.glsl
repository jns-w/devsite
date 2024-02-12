attribute vec2 reference;
varying vec2 vRef;
uniform sampler2D uPosition;

void main() {
    vRef = reference;
    vec3 pos = texture2D(uPosition, reference).rgb;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    gl_PointSize = 4.0;
}