package com.specmate.migration.internal.services;

import java.sql.Connection;

import org.osgi.service.component.annotations.Component;
import org.osgi.service.component.annotations.Reference;

import com.specmate.common.exception.SpecmateException;
import com.specmate.dbprovider.api.IDBProvider;
import com.specmate.dbprovider.api.migration.IAttributeToSQLMapper;
import com.specmate.migration.api.IMigrator;

@Component(property = "sourceVersion=20181210", service = IMigrator.class)
public class Migrator20181210 implements IMigrator {

	private IDBProvider dbProvider;

	@Override
	public String getSourceVersion() {
		return "20181210";
	}

	@Override
	public String getTargetVersion() {
		return "20190125";
	}

	@Override
	public void migrate(Connection connection) throws SpecmateException {
		IAttributeToSQLMapper aMapper = this.dbProvider.getAttributeToSQLMapper("model/requirements",
				getSourceVersion(), getTargetVersion());

		aMapper.migrateNewStringAttribute("CEGModel", "modelRequirements", "");
	}

	@Reference
	public void setDBProvider(IDBProvider dbProvider) {
		this.dbProvider = dbProvider;
	}

}
