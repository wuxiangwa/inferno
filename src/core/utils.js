export function addChildrenToProps(children, props) {
	if (!isNullOrUndefined(children)) {
		if ((isArray(children) && children.length > 0) || !isArray(children)) {
			if (props) {
				props.children = children;
			} else {
				props = {
					children: children
				};
			}
		}
	}
	return props;
}

export function isArray(obj) {
	return obj.constructor === Array;
}

export function isStatefulComponent(obj) {
	return obj && obj.prototype && obj.prototype.render;
}

export function isStringOrNumber(obj) {
	return typeof obj === 'string' || typeof obj === 'number';
}

export function isNullOrUndefined(obj) {
	return obj === undefined || obj === null;
}

export function isInvalidNode(obj) {
	return obj === undefined || obj === null || obj === false;
}

export function isFunction(obj) {
	return typeof obj === 'function';
}

export function isAttrAnEvent(attr) {
	return attr[0] === 'o' && attr[1] === 'n' && attr.length > 3;
}

export function isString(obj) {
	return typeof obj === 'string';
}

export function isNumber(obj) {
	return typeof obj === 'number';
}

export function isAttrAComponentEvent(attr) {
	return attr.substring(0, 11) === 'onComponent'  && attr.length > 12;
}