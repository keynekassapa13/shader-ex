#ifdef GL_ES
precision mediump float;
#endif

const float pi = 3.1415926535;

uniform vec2 u_resolution; // Canvas size (width, height)
uniform float u_time;

mat2 rotate(float phi) {
    return mat2(cos(phi), sin(phi), -sin(phi), cos(phi));
}

void main() {
    vec2 uv = gl_FragCoord.xy / u_resolution;
    vec3 color = vec3(0.0);

    vec2 translate = vec2(-0.5, -0.5);
    uv += translate;

    uv += rotate(u_time * pi/3.0) * uv;

    for (int i = 0; i < 50; i++) {
        float radius = 0.3;
        float rad = radians(360.0 / 50.0) * float(i);

        color += 0.001 / length(uv + vec2(radius * cos(rad), radius * sin(rad)));
    }

    gl_FragColor = vec4(color, 1.0);
}