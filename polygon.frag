#ifdef GL_ES
precision mediump float;
#endif

const float pi = 3.1415926535;

uniform vec2 u_resolution;

float polygonshape(vec2 uv, float radius, float sides) {
    uv = uv * 2.0 - 1.0; 
    float phi = atan(uv.x, uv.y);
    float slice = pi * 2.0 / sides;
    float apothem = floor(0.5 + phi / slice) * slice - phi;
    
    return step(radius, cos(apothem) * length(uv));
}

void main() {
    vec2 uv = gl_FragCoord.xy / u_resolution;

    vec3 color = vec3(0.0);

    float poly = polygonshape(uv, 0.3, 6.0);
    color = vec3(poly);

    gl_FragColor = vec4(color, 1.0);
}