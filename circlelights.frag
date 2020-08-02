#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution; // Canvas size (width, height)
uniform float u_time;

void main() {
    vec2 uv = gl_FragCoord.xy / u_resolution;
    vec3 color = vec3(0.0);

    vec2 translate = vec2(-0.5, -0.5);
    uv += translate;

    for (int i = 0; i < 50; i++) {
        float radius = 0.3;
        float rad = radians(360.0 / 50.0) * float(i);

        color += 0.001 / length(uv + vec2(radius * cos(rad), radius * sin(rad)));
    }

    gl_FragColor = vec4(color, 1.0);
}