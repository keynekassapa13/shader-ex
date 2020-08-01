#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution; // Canvas size (width, height)
uniform float u_time;

float circleshape(vec2 position, float radius) {
    // step(edge, x)
    // 0.0 is returned if x[i] < edge[i], and 1.0 is returned otherwise.
    
    return step(radius, length(position - vec2(0.5)));
}

void main() {
    vec2 uv = gl_FragCoord.xy / u_resolution;

    vec3 color = vec3(0.0);

    vec2 translate = vec2(sin(u_time/2.0) * 0.5, cos(u_time/2.0) * 0.5);

    uv += translate * 0.5;
     
    float circle = circleshape(uv, 0.2);
    color += vec3(circle);

    gl_FragColor = vec4(color, 1.0);
}