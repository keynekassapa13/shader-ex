#ifdef GL_ES
precision mediump float;
#endif

const float pi = 3.1415926535;
uniform vec2 u_resolution; // Canvas size (width, height)
uniform float u_time;

mat2 rotate(float phi) {
    return mat2(cos(phi), sin(phi), -sin(phi), cos(phi));
}

float rectshape(vec2 position, vec2 scale) {
    scale = vec2(0.5) - scale * 0.5;
    vec2 shaper = vec2(step(scale.x, position.x), step(scale.y, position.y));
    shaper *= vec2(step(scale.x, 1.0 - position.x), step(scale.y, 1.0 - position.y));
    return shaper.x * shaper.y;
}

void main() {
    vec2 uv = gl_FragCoord.xy / u_resolution;

    vec3 color = vec3(0.0);

    uv -= 0.5;
    uv = rotate(u_time * pi/3.0) * uv;
    uv += 0.5;
     
    vec2 scale = vec2(0.3, 0.3);
    float rect = rectshape(uv, scale);
    
    color = vec3(rect);
    color = vec3(1) - color;

    gl_FragColor = vec4(color, 1.0);
}