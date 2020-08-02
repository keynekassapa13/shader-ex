#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

void main() {
    vec2 uv = 10.0 * gl_FragCoord.xy / u_resolution;

    for (int i = 1; i < 8; i++) {
        float i_ = float(i);
        uv += vec2(
            0.7 / i_ * sin(i_ * uv.y + u_time + i_ * 0.3) + 0.8,
            0.4 / i_ * sin(uv.x + u_time + i_ * 0.3) + 1.6);
    }

    // uv += vec2(0.7 / sin(uv.y + u_time + 0.3) + 0.8, 0.4 / sin(uv.x + u_time + 0.3) + 1.6);
    vec3 color = vec3(0.5 * sin(uv.x) + 0.5, 0.5 * sin(uv.y) + 0.5, sin(uv.x + uv.y));

    gl_FragColor = vec4(color, 1.0);
}