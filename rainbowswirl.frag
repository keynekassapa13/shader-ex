#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution; // Canvas size (width, height)
uniform float u_time;

void main() {
    vec2 uv = gl_FragCoord.xy / u_resolution;
    uv.y -= 0.2;

    vec3 color = vec3(0.0);

    float angle = atan(-uv.y + 0.25, uv.x - 0.5) * 0.1;
    float len = length(uv - vec2(0.5, 0.25));

    color.r += sin(len * 40.0 + angle * 50.0 + u_time);
    color.g += cos(len * 30.0 + angle * 50.0 - u_time);
    color.b += sin(len * 50.0 + angle * 50.0 + 3.0);

    gl_FragColor = vec4(color, 1.0);
}