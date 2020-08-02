#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution; // Canvas size (width, height)
uniform float u_time;

void main() {
    vec2 uv = 5.0 * (gl_FragCoord.xy * 2.0 - u_resolution) / min(u_resolution.x, u_resolution.y);
    uv.x += sin(u_time) + cos(u_time * 2.1);
    uv.y += cos(u_time) + sin(u_time * 1.6);

    vec3 color = vec3(0.0);

    color = 0.1 * (abs(sin(u_time)) + 0.1) / vec3(length(uv));

    
    gl_FragColor = vec4(color, 1.0);
}