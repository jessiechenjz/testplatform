package com.ymt.testplatform.entity;

import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.hibernate.annotations.GenericGenerator;

@Entity
public class StressMonitorInfo {
	private Integer id;
	private StressMonitorConfig config;
	private StressMonitorItem item;
	private Integer cpu;
	private Integer memory;
	private Integer diskRead;
	private Integer diskWrite;
	private Integer networkReceive;
	private Integer networkSend;
	private Date time;

	@Id
	@GenericGenerator(name = "generator", strategy = "increment")
	@GeneratedValue(generator = "generator")
	@Column(name = "id", length = 11, unique = true)
	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	@ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
	@JoinColumn(name = "configId")
	public StressMonitorConfig getConfig() {
		return config;
	}

	public void setConfig(StressMonitorConfig config) {
		this.config = config;
	}

	@ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
	@JoinColumn(name = "itemId")
	public StressMonitorItem getItem() {
		return item;
	}

	public void setItem(StressMonitorItem item) {
		this.item = item;
	}

	@Column(name = "cpu")
	public Integer getCpu() {
		return cpu;
	}

	public void setCpu(Integer cpu) {
		this.cpu = cpu;
	}

	@Column(name = "memory")
	public Integer getMemory() {
		return memory;
	}

	public void setMemory(Integer memory) {
		this.memory = memory;
	}

	@Column(name = "diskRead")
	public Integer getDiskRead() {
		return diskRead;
	}

	public void setDiskRead(Integer diskRead) {
		this.diskRead = diskRead;
	}

	@Column(name = "diskWrite")
	public Integer getDiskWrite() {
		return diskWrite;
	}

	public void setDiskWrite(Integer diskWrite) {
		this.diskWrite = diskWrite;
	}

	@Column(name = "networkReceive")
	public Integer getNetworkReceive() {
		return networkReceive;
	}

	public void setNetworkReceive(Integer networkReceive) {
		this.networkReceive = networkReceive;
	}

	@Column(name = "networkSend")
	public Integer getNetworkSend() {
		return networkSend; 
	}

	public void setNetworkSend(Integer networkSend) {
		this.networkSend = networkSend;
	}

	//@Column(name = "time",columnDefinition="timestamp", nullable=true, length=19)
	@Column(name = "time")
	@Temporal(TemporalType.TIMESTAMP)
	public Date getTime() {
		return time;
	}

	public void setTime(Date time) {
		this.time = time;
	}

}
