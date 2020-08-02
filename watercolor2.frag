#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

const int AMOUNT = 12;

void main() {
    vec2 uv = 20.0 * (gl_FragCoord.xy - u_resolution / 2.0) / min(u_resolution.y, u_resolution.x);
    vec3 color = vec3(0.0);

    float len;
    for (int i = 0; i < AMOUNT; i++) {
        len = length(uv);

        uv.x = uv.x - cos(uv.y + sin(len)) + cos(u_time/9.0);
        uv.y = uv.y - cos(uv.x + cos(len)) + sin(u_time/12.0);
    }

    color = vec3(cos(len * 2.0), cos(len * 3.0), cos(len * 1.0));
    
    gl_FragColor = vec4(color, 1.0);
}