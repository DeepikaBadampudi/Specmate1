package com.specmate.testspecification.internal.testskeleton;

import java.util.List;

import com.specmate.model.testspecification.ParameterAssignment;
import com.specmate.model.testspecification.TestCase;
import com.specmate.model.testspecification.TestParameter;
import com.specmate.model.testspecification.TestSpecification;

public class JavaTestSpecificationSkeleton extends BaseSkeleton {

	public JavaTestSpecificationSkeleton(String language) {
		super(language);
	}

	@Override
	protected String generateFileName(TestSpecification testSpecification) {
		return getClassName(testSpecification) + ".java";
	}

	private String getClassName(TestSpecification testSpecification) {
		return replaceInvalidChars(testSpecification.getName()) + "Test";
	}

	@Override
	protected void generateHeader(StringBuilder sb, TestSpecification testSpecification,
			List<TestParameter> parameters) {
		sb.append("import org.junit.Test;\n");
		sb.append("import org.junit.Assert;\n\n");
		appendDateComment(sb);
		sb.append("public class ");
		sb.append(getClassName(testSpecification));
		sb.append(" {\n\n");
	}

	@Override
	protected void generateTestCaseFooter(StringBuilder sb, TestCase tc) {
		sb.append("() {\n");
		sb.append("\t\tAssert.throw();\n");
		sb.append("\t}\n\n");
	}

	@Override
	protected void generateTestCaseHeader(StringBuilder sb, TestSpecification ts, TestCase tc) {
		sb.append("\t/*\n");
		sb.append("\t * Testfall: ");
		sb.append(tc.getName());
		sb.append("\n\t */\n");
		sb.append("\t@Test\n");
		sb.append("\tpublic void ");
		sb.append(getClassName(ts));
	}

	@Override
	protected void generateFooter(StringBuilder sb, TestSpecification testSpecification) {
		sb.append("}");
	}

	@Override
	protected void generateTestCaseParameterAssignments(StringBuilder sb, List<ParameterAssignment> assignments) {
		for (ParameterAssignment pAssignment : assignments) {
			appendParameterValue(sb, pAssignment);
		}
	}
}
