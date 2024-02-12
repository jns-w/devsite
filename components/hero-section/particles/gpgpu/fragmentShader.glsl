varying vec2 vRef;
uniform vec3 u_ColorA;
uniform vec3 u_ColorB;

float circle(vec2 _st, float _radius){
    vec2 dist = _st - vec2(0.5);
    return 1.0 - smoothstep(_radius - (_radius * 0.01),
                            _radius + (_radius * 0.01),
                            dot(dist,dist) * 4.0);
}

void main() {
    gl_FragColor.rgba = vec4(u_ColorA, 0.5);
}